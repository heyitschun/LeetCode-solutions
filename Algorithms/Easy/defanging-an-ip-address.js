/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 *
 * Example:
 *
 * Input:
 * address = "1.1.1.1"
 *
 * Output:
 * "1[.]1[.]1[.]1"
 */

function defangIPaddr(address) {
  const re = /\./gi
  return address.replace(re, "[.]");
}

var address = "1.1.1.1";

var answer = defangIPaddr(address);

console.log(answer);
