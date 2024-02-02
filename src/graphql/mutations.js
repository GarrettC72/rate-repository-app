import { gql } from '@apollo/client';

import { USER_DETAILS } from './fragments';

export const SIGN_IN = gql`
  mutation signIn($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const SIGN_UP = gql`
  mutation signUp($user: CreateUserInput) {
    createUser(user: $user) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`