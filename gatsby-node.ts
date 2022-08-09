import type {GatsbyNode} from "gatsby"
import {resolve} from "path";

export const createPages: GatsbyNode["createPages"] = async ({actions}) => {
  const {createPage} = actions
  createPage({
    path: '/foo/bar',
    component: resolve("./src/templates/dummy-page.tsx"),
  })
}
