import React, { FormEvent } from "react";

export interface IFormSearchProps {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<Element>) => void
}
