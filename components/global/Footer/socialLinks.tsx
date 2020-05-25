import React from 'react'
import { Socials } from '../../../config/types'
import { StyledSocialLinks, StyledSocialLink } from './Footer.styled'
import { FacebookIcon } from '../Icons/Facebook'
import { InstagramIcon } from '../Icons/Instagram'
import { TwitterIcon } from '../Icons/Twitter'
import { LinkedinIcon } from '../Icons/Linkedin'
import { FlickrIcon } from '../Icons/Flickr'
import { MediumIcon } from '../Icons/Medium'
import { YouTubeIcon } from '../Icons/Youtube'
import { GitHubIcon } from '../Icons/GitHub'
import { EmailIcon } from '../Icons/Email'

interface SocialLinksArgs {
  socials: Socials
}

export const SocialLinks: React.FC<SocialLinksArgs> = ({ socials }) => (
  <StyledSocialLinks>
    {socials.Twitter.Name && (
      <li>
        <StyledSocialLink href={`https://twitter.com/${socials.Twitter.Name}`} target="_blank" rel="noopener nofollow">
          <TwitterIcon />
          <span>Twitter, opens in new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Facebook && (
      <li>
        <StyledSocialLink href={`https://facebook.com/${socials.Facebook}`} target="_blank" rel="noopener nofollow">
          <FacebookIcon />
          <span>Facebook, will open in a new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Instagram && (
      <li>
        <StyledSocialLink
          href={`https://www.instagram.com/${socials.Instagram}`}
          target="_blank"
          rel="noopener nofollow"
        >
          <InstagramIcon />
          <span>Instagram, opens in new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Linkedin && (
      <li>
        <StyledSocialLink
          href={`https://www.linkedin.com/company/${socials.Linkedin}`}
          target="_blank"
          rel="noopener nofollow"
        >
          <LinkedinIcon />
          <span>LinkedIn, will open in a new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Flickr && (
      <li>
        <StyledSocialLink href={socials.Flickr} target="_blank" rel="noopener nofollow">
          <FlickrIcon />
          <span>Flickr, opens in new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Blog && (
      <li>
        <StyledSocialLink href={socials.Blog} target="_blank" rel="noopener nofollow">
          <MediumIcon />
          <span>Blog, will open in a new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Youtube && (
      <li>
        <StyledSocialLink href={socials.Youtube} target="_blank" rel="noopener nofollow">
          <YouTubeIcon />
          <span>YouTube, opens in new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.GitHub && (
      <li>
        <StyledSocialLink href={`https://github.com/${socials.GitHub}`} target="_blank" rel="noopener nofollow">
          <GitHubIcon />
          <span>GitHub, will open in a new window</span>
        </StyledSocialLink>
      </li>
    )}
    {socials.Email && (
      <li>
        <StyledSocialLink href={`mailto:${socials.Email}`} target="_blank" rel="noopener nofollow">
          <EmailIcon />
          <span>Email, will open in system default mail app</span>
        </StyledSocialLink>
      </li>
    )}
  </StyledSocialLinks>
)
