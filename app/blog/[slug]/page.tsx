import { getBlogPosts } from "@/app/lib/blog";
import { notFound } from "next/navigation";

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post?.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="container">
      <h1>{post?.title}</h1>
    </section>
  );
}
