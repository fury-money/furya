package interchaintest

import (
	"testing"

	"github.com/strangelove-ventures/interchaintest/v7"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/skip-mev/pob/tests/integration"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/stretchr/testify/suite"
)

var (
	numVals = 4
	numFull = 0
)

func GetInterchainSpecForPOB() *interchaintest.ChainSpec {
	// update the genesis kv for juno
	updatedChainConfig := config
	updatedChainConfig.ModifyGenesis = cosmos.ModifyGenesis(append(defaultGenesisKV, []cosmos.GenesisKV{
		{
			Key:   "app_state.builder.params.max_bundle_size",
			Value: 3,
		},
		{
			Key:   "app_state.builder.params.reserve_fee.denom",
			Value: "ufury",
		},
		{
			Key:   "app_state.builder.params.reserve_fee.amount",
			Value: "1",
		},
		{
			Key:   "app_state.builder.params.min_bid_increment.denom",
			Value: "ufury",
		},
		{
			Key:   "app_state.builder.params.min_bid_increment.amount",
			Value: "1",
		},
	}...))

	return &interchaintest.ChainSpec{
		Name:          "furya",
		ChainName:     "furya",
		Version:       "latest",
		ChainConfig:   updatedChainConfig,
		NumValidators: &numVals,
		NumFullNodes:  &numFull,
	}

}

func TestPOB(t *testing.T) {
	sdk.GetConfig().SetBech32PrefixForAccount("furya", "furya")
	s := integration.NewPOBIntegrationTestSuiteFromSpec(GetInterchainSpecForPOB())
	s.WithDenom("ufury")

	suite.Run(t, s)
}
