import React from 'react'
import { Flex, HStack, StackProps } from '@chakra-ui/react'
import { Logo } from 'src/components/Logo'
import { NavLink, RouteLink, navLinkMatch } from '@47ng/chakra-next'
import { FiTwitter } from 'react-icons/fi'
import { OutgoingIconButtonLink } from 'src/components/primitives/OutgoingIconButtonLink'
import { AccentPicker } from 'src/components/Accent'
import { ColorModeSwitch } from 'src/components/ColorModeSwitch'

export interface NavHeaderProps extends StackProps {}

const navLinkProps = {
  flexShrink: 0,
  active: {
    textDecoration: 'underline'
  }
}

export const NavHeader: React.FC<NavHeaderProps> = ({ ...props }) => {
  return (
    <Flex
      as="header"
      alignItems="center"
      gridRowGap={1}
      flexWrap="wrap"
      {...props}
    >
      <HStack as="nav" spacing={[4, 6]} alignItems="center">
        <RouteLink to="/" rounded="full">
          <Logo w={8} h={8} aria-label="François Best" />
        </RouteLink>
        <NavLink to="/" {...navLinkProps} shouldBeActive={navLinkMatch.exact}>
          About
        </NavLink>
        <NavLink to="/open-source" {...navLinkProps}>
          Open Source
        </NavLink>
        <NavLink to="/posts" {...navLinkProps}>
          Blog
        </NavLink>
      </HStack>
      <HStack as="aside" ml="auto" spacing={0}>
        <OutgoingIconButtonLink
          icon={<FiTwitter />}
          aria-label="Follow me on Twitter"
          href="https://twitter.com/fortysevenfx"
          variant="ghost"
          isRound
        />
        <AccentPicker
          aria-label="Accent Color Picker"
          variant="ghost"
          zIndex={1} // Allow the outline to display over siblings
        />
        <ColorModeSwitch variant="ghost" />
      </HStack>
    </Flex>
  )
}
