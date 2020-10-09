package easy

import (
	"fmt"
	"testing"
)

type testpair struct {
	num     int
	maximum int
}

var tests = []testpair{
	{9969, 9999},
	{6969, 9969},
	{9999, 9999},
	{6666, 9666},
}

func TestMaximum69Number(t *testing.T) {
	for _, pair := range tests {
		m := Maximum69Number(pair.num)
		fmt.Println(pair.num, "->", m)
		if m != pair.maximum {
			t.Error(
				"For", pair.num,
				"expected", pair.maximum,
				"got", m,
			)
		}
	}

}
