import { GetStaticProps, GetStaticPaths } from "next";
import Loading from "../../components/loading";

type Props = {
  article_id: string;
  buildAt: number;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      article_id: context.params.article_id as string,
      buildAt: Date.now(),
    },
    unstable_revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/mag/[article_id]"], // ここに await getArticleIdsApi() みたいなことできる？
    fallback: true,
  };
};

export default (props: Props) => {
  return (
    <>
      {props.article_id}: {props.buildAt}
      <Loading />
    </>
  );
};