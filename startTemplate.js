const startTemplate = `
    <div class="offers__option option">
    <form id="option-1">
        <label class="option__label">Name:</label>
        <input class="option__input" id="option-1-1" type="text" name="name"><br>
        <label class="option__label">How many pizzas?</label>
        <input class="option__input" id="option-1-2" type="text" name="quantity"><br>
        <label class="option__label">Diameter:</label>
        <input class="option__input" id="option-1-3" type="text" name="diameter"><br>
        <label class="option__label">Price</label>
        <input class="option__input" id="option-1-4" type="text" name="price"><br>
    </form>
    </div>

    <div class="option offers__option">
    <form id="option-2">
        <label class="option__label">Name:</label>
        <input class="option__input" id="option-2-1" type="text" name="name"><br>
        <label class="option__label">How many pizzas?</label>
        <input class="option__input" id="option-2-2" type="text" name="quantity"><br>
        <label class="option__label">Diameter:</label>
        <input class="option__input" id="option-2-3" type="text" name="diameter"><br>
        <label class="option__label">Price</label>
        <input class="option__input" id="option-2-4" type="text" name="price"><br>
    </form>
    </div>

    <div id="add-new-option" class="offers__option option option__add-option">
    <svg id="add-option-btn" class="option__add-option-button" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <circle cx="60.5" cy="56.5" r="56.5" fill="#DCDADA"/>
        </g>
        <path d="M56 34H66V79H56V34Z" fill="#C4C4C4"/>
        <path d="M38 62V52H83V62H38Z" fill="#C4C4C4"/>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="121" height="121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
    </svg>
    </div>
`;

export default startTemplate;