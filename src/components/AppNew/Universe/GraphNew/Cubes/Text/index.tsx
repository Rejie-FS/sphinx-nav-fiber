import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { NODE_TYPE_COLORS } from '~/constants'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { fontProps } from './constants'

type Props = {
  node: NodeExtendedNew
  hide?: boolean
}

export const TextNode = memo(({ node, hide }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const [selectedNodeRelativeIds, nodeTypes] = useGraphStore((s) => [s.selectedNodeRelativeIds, s.nodeTypes])
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.ref_id === node.ref_id
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)

      if (showSelectionGraph) {
        ref.current.position.set(node.x, node.y, node.z)
      }
    }
  })

  const textScale = useMemo(() => {
    let scale = (node.edge_count || 1) * 4

    if (showSelectionGraph && isSelected) {
      scale = 40
    } else if (!isSelected && isRelative) {
      scale = 50
    }

    false && console.warn(scale)

    return (node.edge_count || 1) * 4
  }, [node.edge_count, isSelected, isRelative, showSelectionGraph])

  const fillOpacity = useMemo(() => {
    if (selectedNode && !isSelected && !isRelative) {
      return 0.1
    }

    return 1
  }, [isSelected, selectedNode, isRelative])

  const color = NODE_TYPE_COLORS[nodeTypes.indexOf(node.node_type)] || NODE_TYPE_COLORS[0]

  const visible = selectedNode ? selectedNode?.ref_id === node.ref_id : true

  return (
    <Text
      ref={ref}
      anchorX="center"
      anchorY="middle"
      color={color}
      fillOpacity={fillOpacity}
      position={[node.x, node.y, node.z]}
      scale={Math.min(textScale, 10)}
      userData={node}
      visible={!hide && visible}
      {...fontProps}
    >
      {node.name}
    </Text>
  )
})

TextNode.displayName = 'TextNode'
