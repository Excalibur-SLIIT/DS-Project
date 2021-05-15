import React, { Component } from 'react'

class SearchSection extends Component {
    render() {
        return (
<div>
<br/><br/>
<div class="search">
        <form action="index.php" method="post">
            <div class="input-group">
                <input type="text" name="home-search" value="" placeholder="Search Product" required="" class="form-control"/>
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary"> Search </button>
                </span>
            </div>
        </form>
    </div>
</div>
    
        )
    }
}

export default SearchSection
