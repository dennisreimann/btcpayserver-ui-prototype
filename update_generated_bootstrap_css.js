/*
 * Replaces the colors in the initial Bootstrap build that needed
 * to be actual color values to work with the modifier functions.
 */
const { readFileSync, writeFileSync } = require('fs')

const filePathInput = './src/static/bootstrap/bootstrap_build.css'
const filePathOutput = './src/static/bootstrap/bootstrap.css'

const bootstrap = readFileSync(filePathInput, 'utf8')

const css = bootstrap
  .replace(/#212529/g, 'var(--btcpay-color-gray-900)')
  .replace(/#0069d9/g, 'var(--btcpay-color-primary)')
  .replace(/#6c757d/g, 'var(--btcpay-color-secondary)')
  .replace(/#28a745/g, 'var(--btcpay-color-success)')
  .replace(/#17a2b8/g, 'var(--btcpay-color-info)')
  .replace(/#ffc107/g, 'var(--btcpay-color-warning)')
  .replace(/#dc3545/g, 'var(--btcpay-color-danger)')
  .replace(/#f8f9fa/g, 'var(--btcpay-color-light)')
  .replace(/#343a40/g, 'var(--btcpay-color-dark)')

writeFileSync(filePathOutput, css, 'utf8')
