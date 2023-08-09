export const typeDefs = `#graphql
    # Schema definitions go here

    type Query {
        tracksForHome: [Track]!
    }
    
    type Track {
        id: ID!
        title: String
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }



`;