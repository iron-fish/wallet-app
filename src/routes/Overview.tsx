import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  IconSearch,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  SelectField,
  CommonTable,
  NAMED_COLORS,
  chakra,
  useBreakpointValue,
} from '@ironfish/ui-kit'
import Chest from 'src/svgx/chest'
import Send from 'src/svgx/send'
import Receive from 'src/svgx/receive'
import CaretIcon from 'src/svgx/caret-icon'

const DEMO_DATA = [
  {
    action: 'Send',
    id: 21,
    to: '4321...23fd...43ws',
    date: '2021-05-13 14:04:45',
    memo: '“Here’s the payment”',
  },
  {
    action: 'Receive',
    id: 4,
    to: null,
    date: '2021-05-13 14:04:45',
    memo: '“ty”',
  },
  {
    action: 'Send',
    id: 21,
    to: '4321...23fd...43ws',
    date: '2021-05-13 14:04:45',
    memo: '“Here’s the payment”',
  },
  {
    action: 'Receive',
    id: 4,
    to: null,
    date: '2021-05-13 14:04:45',
    memo: '“ty”',
  },
  {
    action: 'Send',
    id: 21,
    to: '4321...23fd...43ws',
    date: '2021-05-13 14:04:45',
    memo: '“Here’s the payment”',
  },
  {
    action: 'Receive',
    id: 4,
    to: null,
    date: '2021-05-13 14:04:45',
    memo: '“ty”',
  },
  {
    action: 'Send',
    id: 21,
    to: '4321...23fd...43ws',
    date: '2021-05-13 14:04:45',
    memo: '“Here’s the payment”',
  },
  {
    action: 'Receive',
    id: 4,
    to: null,
    date: '2021-05-13 14:04:45',
    memo: '“ty”',
  },
  {
    action: 'Send',
    id: 21,
    to: '4321...23fd...43ws',
    date: '2021-05-13 14:04:45',
    memo: '“Here’s the payment”',
  },
  {
    action: 'Receive',
    id: 4,
    to: null,
    date: '2021-05-13 14:04:45',
    memo: '“ty”',
  },
  {
    action: 'Send',
    id: 21,
    to: '4321...23fd...43ws',
    date: '2021-05-13 14:04:45',
    memo: '“Here’s the payment”',
  },
  {
    action: 'Receive',
    id: 4,
    to: null,
    date: '2021-05-13 14:04:45',
    memo: '“ty”',
  },
]

const COLUMNS = [
  {
    key: 'transaction-action',
    label: 'Action',
    render: transaction => (
      <HStack spacing="12px">
        <Box
          borderRadius="26px"
          w="26px"
          h="26px"
          background={NAMED_COLORS.LIGHT_GREY}
        >
          {transaction.action === 'Send' ? <Send /> : <Receive />}
        </Box>
        <h5>{transaction.action}</h5>
      </HStack>
    ),
  },
  {
    key: 'transaction-id',
    label: '$IRON',
    render: transaction => <h5>{transaction.id}</h5>,
  },
  {
    key: 'transaction-to',
    label: 'To',
    render: transaction => <h5>{transaction.to}</h5>,
  },
  {
    key: 'transaction-date',
    label: 'Date',
    render: transaction => <h5>{transaction.date}</h5>,
  },
  {
    key: 'transaction.memo',
    label: 'Memo',
    render: transaction => <h5>{transaction.memo}</h5>,
  },
  {
    key: 'transaction-details-link',
    label: '',
    render: () => (
      <HStack spacing={'8px'} color={NAMED_COLORS.LIGHT_BLUE}>
        <Link whiteSpace="nowrap" color={NAMED_COLORS.LIGHT_BLUE}>
          View details
        </Link>
        <CaretIcon />
      </HStack>
    ),
  },
]

const AccountOverview = () => {
  const $showChest = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex direction="column">
      <HStack spacing="16px">
        <Box
          w={{ base: '55%', lg: '70%' }}
          layerStyle="card"
          h="177px"
          background="linear-gradient(92.65deg, #85ADFE 0.41%, #4D88FF 100.03%);"
          boxShadow={`0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.WHITE}, 0.25rem 0.25rem ${NAMED_COLORS.DEEP_BLUE}`}
          borderColor={NAMED_COLORS.DEEP_BLUE}
          borderRadius="0.25rem"
        >
          <Flex p="22px 32px">
            <VStack py="10px" alignItems="flex-start">
              <h4>$IRON</h4>
              <chakra.h2 mt="0px !important">8,456,435.4563</chakra.h2>
              <HStack spacing="16px">
                <Button
                  variant="primary"
                  size="small"
                  leftIcon={
                    <Icon height={8}>
                      <Send fill="currentColor" />
                    </Icon>
                  }
                >
                  <h5>Send</h5>
                </Button>
                <Button
                  variant="primary"
                  size="small"
                  leftIcon={
                    <Icon height={8}>
                      <Receive fill="currentColor" />
                    </Icon>
                  }
                >
                  <h5>Receive</h5>
                </Button>
              </HStack>
            </VStack>
            {$showChest && (
              <Box ml="auto">
                <Chest />
              </Box>
            )}
          </Flex>
        </Box>
        <Box
          w={{ base: '45%', lg: '30%' }}
          layerStyle="card"
          h="177px"
          borderRadius="0.25rem"
          p="32px"
        >
          <VStack alignItems="flex-start">
            <h5>Pending $IRON</h5>
            <h2>143.456</h2>
          </VStack>
        </Box>
      </HStack>
      <VStack mt="32px" alignItems="flex-start">
        <h3>Transactions</h3>
        <HStack w="100%" spacing="16px">
          <InputGroup variant="search" w="70%">
            <InputLeftElement pointerEvents="none">
              {/* <IconSearch w={'0.875rem'} h={'0.875rem'} /> */}
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <SelectField
            w="30%"
            label="Sort by:"
            // size="small"
            options={[
              {
                label: 'Newest to oldest',
                helperText: 'Newest to oldest',
                value: 'option1',
              },
            ]}
          />
        </HStack>
        <CommonTable
          columns={COLUMNS}
          data={DEMO_DATA}
          onRowClick={() => ({})}
        />
      </VStack>
    </Flex>
  )
}

const Overview = () => {
  return (
    <Box width="100%" height="100%">
      <Flex direction="column" width="100%" p="32px">
        <HStack spacing="12px">
          <Box w="24px" h="24px" borderRadius="24px" border="1px solid #DEDFE2">
            <CaretIcon style={{ transform: 'rotate(180deg)' }} />
          </Box>
          <Link>
            <h5>Back to all accounts</h5>
          </Link>
        </HStack>
        <HStack mt="16px" spacing="16px" alignItems="baseline">
          <h2>Primary Account</h2>
          <chakra.h5 color={NAMED_COLORS.GREY}>456t...543d...53d5</chakra.h5>
        </HStack>
        <Tabs mt="16px">
          <TabList>
            <Tab>Account Overview</Tab>
            <Tab isDisabled>Keys</Tab>
            <Tab isDisabled>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="2rem 0 0 0">
              <AccountOverview />
            </TabPanel>
            <TabPanel p="2rem 0 0 0">
              <Flex h="100vh">Keys</Flex>
            </TabPanel>
            <TabPanel p="2rem 0 0 0">
              <Flex h="100vh">Settings</Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}

export default Overview
