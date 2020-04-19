import React from "react";
import Link from "next/link";
import Head from "next/head";

import api from "~/config/api";

import { Container, Content } from "./styles";

const Detail = ({ user }) => (
  <Container>
    <Head>
      <title>Detalhes do {user.name}</title>
    </Head>
    <h1>{user.name}</h1>
    <Content>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <div className="infos">
          <p>
            Followers <strong>{user.followers}</strong>
          </p>
          <p>
            Following <strong>{user.following}</strong>
          </p>
          <p>
            Public repositories <strong>{user.public_repos}</strong>
          </p>
        </div>

        <hr />

        <p className="bio">{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Go to Github
        </a>
      </div>
    </Content>

    <Link href="/users">
      <a>Voltar</a>
    </Link>
  </Container>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await api.get(`/users/${query.username}`);

  return { user: response.data };
};

export default Detail;
