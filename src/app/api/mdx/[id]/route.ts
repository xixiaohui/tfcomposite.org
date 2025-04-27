import { NextRequest, NextResponse } from "next/server"
import { serialize } from "next-mdx-remote/serialize"
import fs from "fs/promises"
import path from "path"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

// 自定义 ParamsContext
interface ParamsContext {
  params: Promise<{ id: string }>
}

export async function GET(
  req: NextRequest,
  context: ParamsContext
) {
  const { id } = await context.params // 异步等待 params

  try {
    const filePath = path.join(process.cwd(), "src/content/products", `${id}.mdx`)
    const fileContent = await fs.readFile(filePath, "utf8")
    const mdxSource = await serialize(fileContent)

    // 明确类型，确保返回符合要求
    return NextResponse.json({ mdxSource: mdxSource as MDXRemoteSerializeResult })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "MDX file not found" }, { status: 404 })
  }
}
