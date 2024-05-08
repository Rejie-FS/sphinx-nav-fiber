import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import BubbleChartIcon from '~/components/Icons/BubbleChartIcon'
import { Flex } from '~/components/common/Flex'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'
import { BlueprintModal } from './BlueprintModal'
import { Table } from './Table'

export const GraphBlueprint: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [schemaAll, setSchemaAll, setSchemaLinks] = useSchemaStore((s) => [s.schemas, s.setSchemas, s.setSchemaLinks])
  const { open } = useModal('blueprintGraph')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas.filter((i) => i.ref_id && !i.is_deleted))
        setSchemaLinks(response.edges)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)

        setLoading(false)
      }
    }

    fetchData()
  }, [setSchemaAll, setSchemaLinks])

  return (
    <Flex grow={1} shrink={1}>
      <Flex direction="row" justify="space-between" px={37} py={21}>
        <Button disabled={loading} onClick={open} startIcon={<BubbleChartIcon />} variant="text">
          Graph View
        </Button>
      </Flex>
      <TableWrapper align={loading ? 'center' : 'flex-start'} justify={loading ? 'center' : 'flex-start'}>
        {loading ? (
          <ClipLoader color={colors.white} />
        ) : (
          <>
            <Table schemas={schemaAll} />
          </>
        )}
      </TableWrapper>
      <BlueprintModal />
    </Flex>
  )
}

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
