# CODAP EmbeddedMode (Shared)

## Description

This directory contains a very simple page implementing CODAP in embedded 
mode in an DIV of the hosting page. 
In this mode,the CFM and Toolbar are suppressed.
Undo and Redo buttons are present in the title bars of each Component. 

The instance of CODAP employed in this page is local to the web server. 
As such, if will go out of date. To update:

  1. Install a developer instance of the CODAP codeline (see https://github.com/concord-consortium/codap/wiki/Developer-Guide)
  2. Run `npm run build:embedded`. This will create a file codap_embeddedCODAP.zip.
  3. Unzip codap_embeddedCODAP.zip in the directory containing this README.

This page is intended to be used for testing. 

## Example

```
https://concord-consortium.github.io/codap-data/mode-examples/codap-embedded-mode-shared#file=examples:Mammals
```
