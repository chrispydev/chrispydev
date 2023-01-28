import React from "react";
import { GetStaticPaths, NextPage } from "next";

// @ts-ignore
import PortableText from "@sanity/block-content-to-react";

import Header from "../../components/header";
import { Works } from "../../types/types";
import Heading from "../../components/heading";
import { config, sanityClient } from "../../sanity";
import SectionComponent from "../../components/sectionComponent";

interface Props {
  filtedWork: Works[];
}

const WorkDetail: NextPage<Props> = ({ filtedWork }) => {
  return (
    <section>
      <Header intro="Work details👇" />
      {filtedWork.map((wBody: Works, index: number) => (
        <article className="my-4" key={index}>
          <SectionComponent>
            <Heading text={`${wBody.title}`} underline />
            <div className="body__style break-all">
              <PortableText
                blocks={wBody.body}
                projectId={config.projectId}
                dataset={config.dataset}
              />
            </div>
          </SectionComponent>
        </article>
      ))}
    </section>
  );
};

export default WorkDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type == "works"]';
  const works = await sanityClient.fetch(query);

  const paths = works.map((work: Works) => ({
    params: { link: `${work.link}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

// @ts-ignore
export async function getStaticProps({ params: { link } }) {
  const query = '*[_type == "works"]';
  const works = await sanityClient.fetch(query);

  const filtedWork = works.filter((work: Works) => work.link == link);

  return {
    props: { filtedWork },
  };
}
