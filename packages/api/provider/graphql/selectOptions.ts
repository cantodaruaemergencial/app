import { gql } from '@apollo/client';

import { ModelTypes } from '#/packages/entities/types';

const GET_GENDERS_OPTIONS = gql`
  query getGender {
    options: genders {
      value: id
      label: Gender
    }
  }
`;

const GET_MARITAL_STATUS_OPTIONS = gql`
  query getMaritalStatus {
    options: maritalStatuses {
      value: id
      label: MaritalStatus
    }
  }
`;

const GET_SCHOOL_TRAINING_OPTIONS = gql`
  query getSchoolTrainings {
    options: schoolTrainings {
      value: id
      label: SchoolTraining
    }
  }
`;

const GET_SKIN_COLORS_OPTIONS = gql`
  query getSkinColors {
    options: skinColors {
      value: id
      label: SkinColor
    }
  }
`;

const MODEL_OPTIONS_QUERIES = {
  [ModelTypes.Gender]: GET_GENDERS_OPTIONS,
  [ModelTypes.MaritalStatus]: GET_MARITAL_STATUS_OPTIONS,
  [ModelTypes.SchoolTraining]: GET_SCHOOL_TRAINING_OPTIONS,
  [ModelTypes.SkinColor]: GET_SKIN_COLORS_OPTIONS,
};

export {
  GET_GENDERS_OPTIONS,
  GET_MARITAL_STATUS_OPTIONS,
  GET_SCHOOL_TRAINING_OPTIONS,
  GET_SKIN_COLORS_OPTIONS,
  MODEL_OPTIONS_QUERIES,
};
