//import IsolatedBlockEditor from "@automattic/isolated-block-editor";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const saveContent = (html: string) => {};
const loadInitialContent = (parse: any) => {};

export default function BlockEditor(props: any) {
  const [Editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const IsolatedBlockEditor = dynamic(
      () => import("@automattic/isolated-block-editor"),
      {
        ssr: false,
      }
    );

    console.dir(IsolatedBlockEditor);

    setEditor(IsolatedBlockEditor);

    return () => {};
  }, []);

  return (
    <>
      {Editor != null ? (
        <Editor
          settings={{
            iso: {
              toolbar: {
                inspector: true,
                toc: true,
              },
              sidebar: {
                inspector: true,
                inserter: true,
              },
              moreMenu: false,
              blocks: {
                allowBlocks: [],
                disallowBlocks: [
                  "core/page-break",
                  "core/html",
                  "core/next-page",
                  "core/more",
                  "core/embed",
                  "core/shortcode",
                  "core/archives",
                  "core/calendar",
                  "core/categories",
                  "core/custom",
                  "core/latest-comments",
                  "core/latest-posts",
                  "core/rss",
                  "core/social",
                  "core/tag-cloud",
                  "core/search",
                  "core/social-link",
                  "core/social-links",
                  "core/file",
                ],
              },
            },
          }}
          onSaveContent={(html: string) => saveContent(html)}
          onError={() => document.location.reload()}
        />
      ) : null}
    </>
  );
}
