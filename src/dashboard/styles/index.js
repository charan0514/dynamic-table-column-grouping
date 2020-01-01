import styled from 'styled-components';

export const ContainerStyled = styled.div `
    margin: 20px;
    .file-upload-wrapper {
        display: flex;
        justify-content: center;
        border: 2px dashed #ccc;
        border-radius: 20px;
        width: 480px;
        margin: 50px auto;
        padding: 20px;
    }
    .table-filter-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        label {
            padding-right: 5px;
        }
    }
`

export const TableWraperStyled = styled.div `
    max-width: 80%;
    margin: auto;
    overflow: hidden;
`

export const TableStyled = styled.div `
    overflow: auto;
`

export const InputCmp = styled.input `
    border-width: 1px;
    border-style: solid;
    border-color: rgb(206, 212, 218);
    background-color: #fff;
`
