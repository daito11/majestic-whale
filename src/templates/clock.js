import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Clock extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div id="wrapper">
                    <section id="main" className="wrapper">
                        <div className="inner">
                            <h1 className="major">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                            {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                                <span className="image fit"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt="" /></span>
                            }
                            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                        let GetSectionComponent = components[_.get(section, 'component')];
                        return (
                            <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} page={this.props.pageContext} />
                        )
                    })}
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }
}
