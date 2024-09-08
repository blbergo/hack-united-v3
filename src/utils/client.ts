import { TypedPocketBase } from "@/types/pocketbase-types";
import PocketBase from "pocketbase";

export const pb = new PocketBase(
  "https://pocketbase.gdsccpp.dev"
) as TypedPocketBase;
