import { gql } from '@apollo/client'

export const QUERY_FILES = gql`
  query Files(
    $limit: Int!
    $offset: Int
    $orderBy: [files_files_order_by!]!
    $where: files_files_bool_exp
  ) {
    files_files_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    files_files(order_by: $orderBy, limit: $limit, offset: $offset, where: $where) {
      id
      name
      cid {
        blockHeight: block_height
        extrinsicId: extrinsic_id
        timestamp
      }
    }
  }
`

export const QUERY_FILE_BY_ID = gql`
  query FileById($cid: String!) {
    files_files(where: { id: { _eq: $cid } }) {
      id
      name
      cid {
        blockHeight: block_height
        extrinsicId: extrinsic_id
        timestamp
        blockHash: block_hash
        extrinsicHash: extrinsic_hash
      }
    }
  }
`

export const QUERY_CID = gql`
  query GetCID($cid: String!) {
    files_metadata(where: { id: { _eq: $cid } }) {
      name
      chunk {
        data
        uploadOptions: upload_options
      }
      metadata_cids {
        chunk {
          data
        }
      }
    }
    files_folders(where: { id: { _eq: $cid } }) {
      name
      chunk {
        data
        uploadOptions: upload_options
      }
      folder_cids {
        chunk {
          data
        }
      }
    }
    files_files(where: { id: { _eq: $cid } }) {
      name
      chunk {
        data
        uploadOptions: upload_options
      }
      file_cids {
        chunk {
          data
        }
      }
    }
  }
`
