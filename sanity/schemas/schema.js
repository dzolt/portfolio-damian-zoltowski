import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import pageInfo from "./pageInfo";
import experience from "./experience";
import skill from "./skill";
import project from "./project";
import social from "./social";
import resume from "./resume";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    pageInfo,
    skill,
    experience,
    project,
    social,
    resume,
  ]),
});
