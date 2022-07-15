import styled from "styled-components"

export const Table = styled.table`
border-collapse: collapse;
width: 90%;
margin: 20px;
    
th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
tr:nth-child(odd){background-color: gray}

th {
    background-color: teal;;
    color: white;
}
`

