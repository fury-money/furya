package types

var (
	executedContractsKey = []byte("furya/executedContracts")
)

func GetExecutedContractsKey() []byte {
	return executedContractsKey
}
