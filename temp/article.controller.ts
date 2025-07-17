import { Controller, Get, Param, Query, Req, UseGuards } from "@nestjs/common";

import { JwtAuthGuard } from "src/common/guards/jwt.auth.guard";
import { ArticleModel } from "src/features/wiki/modules/article/entities/article.entity";
import { ArticleService } from "../services/article.service";

@Controller(ArticleModel.endpoint)
export class ArticleController {
  constructor(private readonly service: ArticleService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findList(
    @Req() request: any,
    @Query() query: any,
    @Query("search") search: string,
    @Query("taxonomies") taxonomies: string,
    @Query("articleIds") articleIds?: string,
  ) {
    const taxonomyIds = taxonomies ? taxonomies.split(",") : undefined;
    const articles = articleIds ? articleIds.split(",") : undefined;
    return await this.service.find({
      articleIds: articles,
      taxonomyIds: taxonomyIds,
      term: search,
      query: query,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(":articleId")
  async findById(@Param("articleId") articleId: string) {
    return await this.service.findById({ articleId: articleId });
  }
}
