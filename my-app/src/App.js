import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
export default function App() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get(`https://www.gov.uk/bank-holidays.json`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {APIData.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Description>
                                    {item.date}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}