import React, { Component } from 'react';

// components
import Developer from './developer';

export default class DevGallery extends Component {
  render(){
    return(
      <div class="dev-gallery">
          {
            Object
              .keys(this.props.developers)
              .map(key => <Developer
                name={this.props.developers[key].name}
                image={this.props.developers[key].image}
                skills={this.props.developers[key].skills}
                websites={this.props.developers[key].websites}
                location={this.props.developers[key].location}
              />)
          }
      </div>
    )
  }
}