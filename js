nction addItem()
{
    $("#js-shopping-list-form").submit(function(evt){
        evt.preventDefault();
        let item = $("#shopping-list-entry").val();
        let newItem = `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
        </li>`;
        $(".shopping-list").append(newItem);
    });
  
}

function checkItem()
{
    $(".shopping-item-toggle").click(function(evt){
        $(this).closest("li").addClass("shopping-item__checked");
        $(this).text("uncheck");
        unCheckItem();
    })
}

function unCheckItem(){
    $(".shopping-item-toggle").click(function(evt){
            $(this).closest("li").removeClass("shopping-item__checked");
            $(this).text("check");
            checkItem();
    });
}

function removeItem()
{
    $(".shopping-item-delete").click(function(evt){
        $(this).closest("li").remove();
    })
}

function init()
{
    addItem();
    checkItem();
    removeItem();
}
//jQuery would run init as the default function
$(init);
