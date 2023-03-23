import React, { useState } from 'react'
import FormMulti from './FormMulti';
import StickyNotes from './StickyNotes';
import Widget1 from './WIdget1';
import Layout from './Layout';

export default function Praktikum() {
    const [title, setTitle] = useState("My Apps");

    return (
        <Layout title={title} >
            <div className="row ml-2 w-100">
                <div className="col-lg-4">
                    <Widget1 title={title} setTitle={setTitle} />
                </div>
                <div className="col-lg-8">
                    <FormMulti />
                </div>
                <div className="col-lg-12">
                    <StickyNotes />
                </div>
            </div>


        </Layout>
    )
}
