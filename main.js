
function active(){
    var searchbar = document.getElementById('searchBar');
    if(searchbar.value =='Search...'){
        searchbar.value=''
        searchbar.placeholder = 'Search...'
    }
}

function inactive(){
    var searchbar = document.getElementById('searchBar');
    if(searchbar.value ==''){
        searchbar.value='Search...'
        searchbar.placeholder = ''
    }
}

const search= document.getElementById('form_search');
search.addEventListener('submit', myfunction);
function myfunction(e){
    e.preventDefault();
    window.location = 'http://www.google.com/search?q=' + document.getElementById('searchBar').value;
    return false;
}