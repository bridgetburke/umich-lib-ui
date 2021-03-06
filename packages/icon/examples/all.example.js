import React from "react";
import Icon, { icons } from "../src/index";

export let name = "all";

export let Example = () => (
  <ul className="y-spacing">
    {Object.keys(icons).map(i => (
      <li><Icon icon={i} size={24} />{i}</li>
    ))}
  </ul>
)

