import { IFilterOperator } from "@src/components/fields/types";

export const filterOperators: IFilterOperator[] = [
  {
    label: "equals",
    value: "==",
  },
  {
    label: "not equals",
    value: "!=",
  },
  {
    label: "is empty",
    value: "is-empty",
  },
  {
    label: "is not empty",
    value: "is-not-empty",
  },
];
