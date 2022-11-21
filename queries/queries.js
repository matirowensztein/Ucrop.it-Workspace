import fetchData from "../helpers/fetchData";

export const getHomepagePosts = async () => {
    const data = await fetchData(
        `
        {
            inputs {
               id
               name
               type
               toxicity
               unit_type
           }
           }
        `,
        {
            variables: {}
        }
    )

    return data.data.inputs;
}
