import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    url
  }
`;

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repositoryId
    user {
      ...UserDetails
    }
    repository {
      fullName
    }
  }
  ${USER_DETAILS}
`