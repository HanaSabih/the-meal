/**
 * @jest-environment jsdom
 */

import test, { beforeEach } from "node:test";
import getCount from "../modules/commentcounter.js";

describe('Comments counting', () => {
    beforeEach(() => {
        document.body.innerHTML = 
        '<div>'
            + '<span class="commentsNum"><span>'
            + '  <ul class="comntContainer"></ul>'
        + '</div>';
    })
    const commCount = document.querySelector(".commentsNum");
    const commDisplay = document.querySelector(".comntContainer");
    test('counting the number of comments before addition', () => {        
        getCount();
        expect(commCount.innerText).toBe(0);
    })
    test('counting the number of comments after addition', () => {        
        commDisplay.innerHTML += `<li> 2022/01/31 - John Doe <br> Very Tasty</li>`;
        getCount();
        expect(commCount.innerText).toBe(1);
    })
    test('counting the number of comments after addition', () => {        
        commDisplay.innerHTML += `<li> 2023/02/02 - Jane Doe <br> I love it</li><li> 2023/02/08 - Hana <br> Best meal ever</li>`;
        getCount();
        expect(commCount.innerText).toBe(3);
    })
})