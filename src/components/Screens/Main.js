import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className=" uk-height-viewport uk-flex uk-flex-middle  uk-flex-center uk-background-muted ">
                <div class="uk-child-width-expand@s" uk-grid="true">
                    <div class="uk-grid-item-match">
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3>Select the Image</h3>
                            
                                <div className="js-upload uk-flex uk-flex-center" uk-form-custom="true">
                                    <input type="file" multiple />
                                    <button className="uk-button uk-button-default" type="button" tabIndex="-1">Select</button>
                                </div>
                            
                        </div>
                    </div>

                </div>


            </div>);
    }
}

export default Main;