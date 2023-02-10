/** @jest-environment jsdom */

import getCount from "../modules/commentcounter.js";

describe("count displayed comments for each food item", () => {
  document.body.innerHTML = `
  <ul class="comments">
    <li class="shown-comment"></li>
    <li class="shown-comment"></li>
    <li class="shown-comment"></li>
    <li class="shown-comment"></li>
  </ul>`;

  test("counted comments should be 4", async () => {
    expect(getCount()).toEqual(4);
  });
});