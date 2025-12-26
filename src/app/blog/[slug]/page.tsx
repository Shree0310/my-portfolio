import NewPortfolio from "@/components/NewPortfolio";
import { Metadata } from "next";
import Image from "next/image";

import { getBlogFrontMatterBySlug, getSingleBLog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: frontmatter?.title ?? "Blog - Sowrasree banerjee",
    description: frontmatter?.description ?? "All my general tech thoughts",
  };
};

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await getSingleBLog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <div className="min-h-screen flex items-start justify-start">
      <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <div className="mx-auto w-full overflow-hidden rounded-lg border border-neutral-200 shadow-xl md:h-[29rem] mb-20">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            width={800}
            height={500}
            className="mx-auto w-full overflow-hidden rounded-lg border border-neutral-200 shadow-xl py-4"
          />
        </div>

        <div className="prose mx-auto mt-6">{content}</div>
      </NewPortfolio>
    </div>
  );
};

export default SingleBlogPage;