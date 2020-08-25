import React, { Component } from 'react'
import { Segment, Image, Container, Grid, Header, Button, Icon, Reveal } from 'semantic-ui-react'
import Lightbox from 'lightbox-react'

import './PanoArt.css'
import 'lightbox-react/style.css'

class Art extends Component {

    constructor(props) {
        super(props)
        this.artwork = {
            "id": "516dfb9ab31e2b2270000c45",
            "slug": "william-michael-harnett-the-old-violin",
            "created_at": "2013-04-17T01:32:10+00:00",
            "updated_at": "2019-04-24T13:01:45+00:00",
            "title": "The Old Violin",
            "category": "Painting",
            "medium": "Oil on canvas",
            "date": "1886",
            "dimensions": {
                "in": {
                    "text": "38 × 23 5/8 in",
                    "height": 38.0,
                    "width": 23.625,
                    "depth": null,
                    "diameter": null
                },
                "cm": {
                    "text": "96.5 × 60 cm",
                    "height": 96.5,
                    "width": 60.0,
                    "depth": null,
                    "diameter": null
                }
            },
            "published": true,
            "website": "",
            "signature": "",
            "series": "",
            "provenance": "",
            "literature": "",
            "exhibition_history": "",
            "collecting_institution": "National Gallery of Art, Washington D.C.",
            "additional_information": "\n    overall: 96.5 x 60 cm (38 x 23 5/8 in.)  framed: 119.7 x 84.1 x 5.1 cm (47 1/8 x 33 1/8 x 2 in.)\n    ",
            "image_rights": "Courtesy National Gallery of Art, Washington",
            "blurb": "",
            "unique": false,
            "cultural_maker": null,
            "iconicity": 25.245520919676473,
            "can_inquire": false,
            "can_acquire": false,
            "can_share": true,
            "sale_message": null,
            "sold": false,
            "image_versions": [
                "large",
                "large_rectangle",
                "larger",
                "medium",
                "medium_rectangle",
                "normalized",
                "square",
                "tall"
            ],
            "_links": {
                "thumbnail": {
                    "href": "https://d32dm0rphc51dk.cloudfront.net/dTGcd0Xx0aEp_MDFdHIUIw/medium.jpg"
                },
                "image": {
                    "href": "https://d32dm0rphc51dk.cloudfront.net/dTGcd0Xx0aEp_MDFdHIUIw/{image_version}.jpg",
                    "templated": true
                },
                "partner": {
                    "href": "https://api.artsy.net/api/partners/4f99c7b793ab4b0001000179"
                },
                "self": {
                    "href": "https://api.artsy.net/api/artworks/516dfb9ab31e2b2270000c45"
                },
                "permalink": {
                    "href": "https://www.artsy.net/artwork/william-michael-harnett-the-old-violin"
                },
                "genes": {
                    "href": "https://api.artsy.net/api/genes?artwork_id=516dfb9ab31e2b2270000c45"
                },
                "artists": {
                    "href": "https://api.artsy.net/api/artists?artwork_id=516dfb9ab31e2b2270000c45"
                },
                "similar_artworks": {
                    "href": "https://api.artsy.net/api/artworks?similar_to_artwork_id=516dfb9ab31e2b2270000c45"
                },
                "collection_users": {
                    "href": "https://api.artsy.net/api/users?collected_artwork_id=516dfb9ab31e2b2270000c45"
                },
                "sale_artworks": {
                    "href": "https://api.artsy.net/api/sale_artworks?artwork_id=516dfb9ab31e2b2270000c45"
                }
            },
            "_embedded": {
                "editions": []
            }
        }
        this.state = { lightboxIsOpen: false }
    }

    render() {
        const a = this.artwork
        const imageHref = a._links.image.href.replace("{image_version}", "large")
        const thumbnailHref = a._links.thumbnail.href
        const { lightboxIsOpen } = this.state
        return (
            <Segment inverted vertical>
                <Container
                    textAlign='center'
                    vertical
                    fluid
                >
                    <Grid columns={2} textAlign='center' verticalAlign='middle' divided inverted>
                        <Grid.Column width={8}>
                            {lightboxIsOpen && (
                                <Lightbox
                                    mainSrc={imageHref}
                                    onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
                                />
                            )}
                            <Image
                                src={imageHref}
                                size='medium'
                                onClick={() => this.setState({ lightboxIsOpen: true })}
                                floated='right'
                                style={{ marginRight: '7vw' }}
                            />
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <div style={{marginLeft: '7vw'}}>
                                <Grid.Row style={{ marginBottom: 20 }}>
                                    <Header
                                        as='h1'
                                        inverted
                                        textAlign='left'
                                    >
                                        William Michael Harnett
                        </Header>
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: 20, marginBottom: 20 }}>
                                    <Header
                                        as='h1'
                                        inverted
                                        color='teal'
                                        textAlign='left'
                                        style={{ fontStyle: 'italic' }}
                                    >
                                        {a.title}
                                    </Header>
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: 150, marginBottom: 10 }}>
                                    <Header
                                        as='h3'
                                        inverted
                                        color='grey'
                                        textAlign='left'
                                    >
                                        {a.medium}, {a.dimensions.cm.text}
                                    </Header>
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: 10, marginBottom: 10 }}>
                                    <Header
                                        as='h3'
                                        inverted
                                        color='grey'
                                        textAlign='left'
                                    >
                                        {a.collecting_institution}
                                    </Header>
                                </Grid.Row>
                                <Grid.Row>
                                    <Button.Group inverted color='teal' floated='left' style={{ marginTop: 10 }}>
                                        <Button as='a' href={"https://cn.bing.com/search?q=" + "ABC"} target='_blank'>
                                            <Icon name='user' />
                                    Artist
                                </Button>
                                        <Button as='a' href={"https://cn.bing.com/search?q=" + "ABC"} target='_blank'>
                                            <Icon name='image' />
                                    Artwork
                                </Button>
                                    </Button.Group>
                                </Grid.Row>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

export default Art