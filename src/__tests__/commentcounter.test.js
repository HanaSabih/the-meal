/**
 * @jest-environment jsdom
*/

import { test, beforeEach } from "@jest/globals";
import getCount from "../modules/commentcounter.js";
// import { addCmtBtn } from "../modules/modal.js";
// const mocksubmit = () => jest.fn();   

describe('Comments counting', () => {
    beforeEach(() => {
        document.body.innerHTML = 
        '<div>'
            + '<span class="commentsNum"><span>'
            + '<ul class="comntContainer"></ul>'
            + '<form id="addCmtForm">'
            + '<input type="text" class="form-control" id="nameCmt" value="Name"/>'
            + '<textarea value="Insights"></textarea>'
            + '<button type="submit"></button>'
            + '</form>'
        + '</div>';
        // addCmtBtn.onsubmit = mocksubmit;
    })   
    
    const commCount = document.querySelector(".commentsNum");
    const commDisplay = document.querySelector(".comntContainer");
    
    test('counting the number of comments before addition', () => {        
        getCount();
        expect(commCount.innerText).toBe(0);
    })
    test('counting the number of comments after addition', () => {        
        commDisplay.innerText += `<li> 2022/01/31 - John Doe <br> Very Tasty</li>`;
        getCount();
        expect(commCount.innerText).toBe(1);
    })
    test('counting the number of comments after addition', () => {        
        commDisplay.innerText += `<li> 2023/02/02 - Jane Doe <br> I love it</li><li> 2023/02/08 - Hana <br> Best meal ever</li>`;
        getCount();
        expect(commCount.innerText).toBe(4);
    })
})