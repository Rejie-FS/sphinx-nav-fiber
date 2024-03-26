import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { capitalizeString } from '~/utils/capitalize'
import { OPTIONS, createNewNodeType, initialValue } from './constants'
import { Props, TOption } from './types'

export const SourceTypeStep: FC<Props> = ({ skipToStep, allowNextStep, onSelectType, selectedType }) => {
  const [customSchemaFlag] = useFeatureFlagStore((s) => [s.customSchemaFlag])
  const [options, setOption] = useState<TOption[] | null>(null)

  createNewNodeType.action = () => skipToStep('selectParent')

  useEffect(() => {
    const init = async () => {
      if (customSchemaFlag) {
        const data = await getNodeSchemaTypes()

        const schemaOptions = data.schemas.map((schema) => ({
          label: capitalizeString(schema.type),
          value: schema.type,
          type: schema.type,
        }))

        setOption([...schemaOptions, createNewNodeType])
      } else {
        setOption([...OPTIONS, initialValue])
      }
    }

    init()
  }, [selectedType, customSchemaFlag])

  const onSelect = (val: TAutocompleteOption | null) => {
    onSelectType(val?.label || '')
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={20}>
        <Flex align="center" direction="row">
          <StyledText>Select Type</StyledText>
        </Flex>
      </Flex>

      <Flex direction="row" mb={20}>
        <AutoComplete autoFocus onSelect={onSelect} options={options} />
      </Flex>

      <Flex>
        <Button
          color="secondary"
          disabled={!allowNextStep}
          onClick={() => skipToStep('source')}
          size="large"
          type="button"
          variant="contained"
        >
          Next
        </Button>
      </Flex>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
