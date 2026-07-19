import { blogApi } from "../utils/api";

export async function GET(context: any) {
  const { posts } = await blogApi.getBlogPosts(1, 100);
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || context.site || context.url.origin;

  const xmlItems = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${post.published_at ? new Date(post.published_at).toUTCString() : new Date(post.created_at).toUTCString()}</pubDate>
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Van360</title>
    <link>${siteUrl}</link>
    <description>Dicas de gestão, rotas e finanças para o seu transporte escolar.</description>
    <language>pt-br</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${xmlItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
