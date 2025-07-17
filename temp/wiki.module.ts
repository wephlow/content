import { Module } from "@nestjs/common";
import { ArticleModule } from "src/features/wiki/modules/article/article.module";
import { ArticleVersionModule } from "src/features/wiki/modules/articleversion/articleversion.module";

@Module({
  imports: [ArticleModule, ArticleVersionModule],
})
export class WikiModule {}
