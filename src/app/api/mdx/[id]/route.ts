import { NextRequest, NextResponse } from "next/server"
import { serialize } from "next-mdx-remote/serialize"
import fs from "fs/promises"
import path from "path"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params

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
