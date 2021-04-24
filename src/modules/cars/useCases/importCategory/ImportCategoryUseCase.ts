import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private createCategoryRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path); // creating the stream
      const parseFile = csvParse();
      stream.pipe(parseFile); // get each read slice file
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    // eslint-disable-next-line array-callback-return
    categories.map(async (category) => {
      const { name, description } = category;
      const existsCategory = await this.createCategoryRepository.findByName(
        name
      );
      if (!existsCategory) {
        this.createCategoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
