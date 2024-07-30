import React from 'react';

const Projects = () => {
  return (
   <div id="foreground">
        <div id="introSection">
            <div id="introText">
                <h1> Better Preview</h1>
                <h4 style={{color: "#AAA"}}> Preview with the ability to search semantically</h4>
                <p>This is a semantic search application capable of extracting and annotating text in PDF documents. The application parses text from a PDF file, tokenizes it, and generates embeddings using the MiniLM-V6 model.</p>
<p>This is the first somewhat major program I wrote in swift and therefore took more time than usual. It involved SwiftUI, PDFKit and converting the MiniLM model to a CoreML model for efficiency on M-chips. The system ensures reliable performance by handling various document structures and formats, providing users with precise search results.</p>
<p>The step-by-step process involves extracting text from the PDF, splitting the text into sentences, tokenizing each sentence using a BERT-based tokenizer, and generating embeddings with the MiniLM-V6 model.</p>
<p>The program initially compared query embedding to stored pdf embeddings using linear search but that of course would be inefficient and slow for real world use. Now what I do is create 8 buckets using K-means clustering and first compare distances b/w the centroids of the buckets 
    and the query embedding (cosine distance) and then searching in the nearest bucket. This increases indexing time initially but significantly reduces query search time (which seems like an acceptable tradeoff). I avoided using Pinecone because I wanted to myself look up solutions for high dimension vector storage solutions. Next plan would be to implement HNSW from scratch.</p>
            </div>
        </div>
        <div id="imageSection">
            <img src="Semantic_Search.jpg" alt="Semantic Search Screenshot" style={{width: "80%"}}></img>
        </div>
    </div> 
  );
};

export default Projects;
